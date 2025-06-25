require('dotenv').config();
const amqp = require('amqplib');
const axios = require('axios');
const express = require('express');
const { createClient } = require('@supabase/supabase-js');

const app = express();
const PORT = process.env.PORT || 3000;

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);
const queueName = 'chat_messages';

app.get('/', (req, res) => {
  res.send('Worker está rodando e ouvindo a fila RabbitMQ!');
});

app.listen(PORT, () => {
  console.log(`Servidor HTTP iniciado na porta ${PORT}`);
});

async function main() {
  try {
    const connection = await amqp.connect(process.env.RABBITMQ_URL);
    const channel = await connection.createChannel();

    await channel.assertQueue(queueName, { durable: true });
    console.log(`Aguardando mensagens na fila: ${queueName}`);

    channel.consume(queueName, async (msg) => {
      if (msg !== null) {
        console.log(`Mensagem recebida da fila "${queueName}":`, msg.content.toString());
        try {
          const messageData = JSON.parse(msg.content.toString());

          const { error } = await supabase
            .from('messages')
            .insert([
              {
                from_user: messageData.from,
                to_user: messageData.to,
                message: messageData.message,
                created_at: new Date().toISOString(),
              },
            ]);

          if (error) {
            console.error('Erro ao inserir no Supabase:', error);
            channel.nack(msg, false, false); 
            return;
          }

          await axios.post(process.env.BACKEND_NOTIFY_URL, messageData);

          channel.ack(msg);
        } catch (err) {
          console.error('Erro no processamento da mensagem:', err);
          channel.nack(msg, false, false); 
        }
      }
    });
  } catch (error) {
    console.error('Erro ao conectar ao RabbitMQ:', error);
  }
}

main().catch(console.error);
