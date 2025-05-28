require('dotenv').config();
const amqp = require('amqplib');
const axios = require('axios');
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);
const queueName = 'chat_messages';

async function main() {
  const connection = await amqp.connect(process.env.RABBITMQ_URL);
  const channel = await connection.createChannel();

  await channel.assertQueue(queueName, { durable: true });
  console.log(`Aguardando mensagens na fila: ${queueName}`);
  channel.consume(queueName, async (msg) => {
    if (msg !== null) {
      try {
        const messageData = JSON.parse(msg.content.toString());

        const { error } = await supabase
          .from('messages')
          .insert([
            {
              from_user: messageData.from,
              to_user: messageData.to,
              message: messageData.message,
              created_at: new Date().toISOString()
            }
          ]);

        if (error) {
            channel.nack(msg, false, false);
            return;
        }

        await axios.post(process.env.BACKEND_NOTIFY_URL, messageData);

        channel.ack(msg);
      } catch (err) {
        channel.nack(msg, false, true);
      }
    }
  });
}

main().catch(console.error);
