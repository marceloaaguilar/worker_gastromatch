import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:intl/intl.dart';

class CustomInputField extends StatefulWidget {
  final TextEditingController? controller;
  final String? initialValue;
  final TextInputType? keyboardType;
  final String? hintText;
  final bool obscureText;
  final FormFieldValidator<String>? validator;
  final int? maxLines;
  final int? minLines;
  final List<TextInputFormatter>? inputFormatters;

  const CustomInputField({
    this.controller,
    this.initialValue,
    this.keyboardType,
    this.hintText,
    this.obscureText = false,
    this.validator,
    this.maxLines = 1,
    this.minLines,
    this.inputFormatters,
  });

  @override
  _CustomInputFieldState createState() => _CustomInputFieldState();
}

class _CustomInputFieldState extends State<CustomInputField> {
  bool _obscure = false;

  @override
  void initState() {
    super.initState();
    if (widget.obscureText) {
      _obscure = true;
    }
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        color: Color(0xFFf1f0f5),
        borderRadius: BorderRadius.circular(16),
      ),
      child: TextFormField(
        controller: widget.controller,
        initialValue: widget.initialValue,
        keyboardType: widget.keyboardType,
        obscureText: _obscure,
        obscuringCharacter: '*',
        validator: widget.validator,
        maxLines: widget.obscureText ? 1 : widget.maxLines,
        minLines: widget.minLines,
        inputFormatters: widget.inputFormatters,
        decoration: InputDecoration(
          border: InputBorder.none,
          focusedBorder: InputBorder.none,
          enabledBorder: InputBorder.none,
          errorBorder: InputBorder.none,
          disabledBorder: InputBorder.none,
          contentPadding: EdgeInsets.symmetric(horizontal: 16, vertical: 12),
          hintText: widget.hintText,
          suffixIcon: widget.obscureText
              ? Padding(
            padding: EdgeInsets.all(4),
            child: Material(
              color: Colors.transparent,
              child: InkWell(
                borderRadius: BorderRadius.circular(64),
                child: Icon(
                  _obscure ? Icons.visibility_off : Icons.visibility,
                ),
                onTap: () {
                  setState(() {
                    _obscure = !_obscure;
                  });
                },
              ),
            ),
          )
              : null,
        ),
      ),
    );
  }
}

class CustomCheckbox extends StatelessWidget {
  final bool value;
  final void Function(bool? value) onChanged;
  final String? labelText;
  final Widget? label;
  const CustomCheckbox({
    this.value = false,
    required this.onChanged,
    this.labelText,
    this.label,
  });

  @override
  Widget build(BuildContext context) {
    return Row(
      crossAxisAlignment: CrossAxisAlignment.center,
      children: [
        Checkbox(
          value: value,
          onChanged: onChanged,
          checkColor: Colors.white,
          activeColor: Colors.orange,
        ),
        if (labelText != null)
          GestureDetector(
            child: Text(labelText!),
            onTap: () => onChanged(!value),
          )
        else if (label != null)
          GestureDetector(
            child: label,
            onTap: () => onChanged(!value),
          )
      ],
    );
  }
}

class CustomSelectionField extends StatelessWidget {
  final String? value;
  final List<String> items;
  final String? hintText;
  final ValueChanged<String?> onChanged;

  const CustomSelectionField({
    required this.value,
    required this.items,
    required this.onChanged,
    this.hintText,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        color: Color(0xFFf1f0f5),
        borderRadius: BorderRadius.circular(16),
      ),
      padding: EdgeInsets.symmetric(horizontal: 16),
      child: DropdownButtonFormField<String>(
        value: items.contains(value) ? value : null,
        onChanged: onChanged,
        items: items.map((item) {
          return DropdownMenuItem(
            value: item,
            child: Text(item),
          );
        }).toList(),
        decoration: InputDecoration(
          border: InputBorder.none,
          hintText: hintText ?? 'Selecione uma opção',
        ),
        dropdownColor: Colors.white,
      ),
    );
  }
}

class MoneyInputFormatterPtBr extends TextInputFormatter {
  final double maxValue;

  MoneyInputFormatterPtBr({this.maxValue = 9999.99});

  final NumberFormat _formatter = NumberFormat.currency(
    locale: 'pt_BR',
    symbol: 'R\$',
    decimalDigits: 2,
  );

  @override
  TextEditingValue formatEditUpdate(
      TextEditingValue oldValue,
      TextEditingValue newValue,
      ) {
    // Keep only digits
    final digitsOnly = newValue.text.replaceAll(RegExp(r'[^\d]'), '');
    if (digitsOnly.isEmpty) {
      return TextEditingValue(
        text: _formatter.format(0),
        selection: TextSelection.collapsed(offset: 4), // after "R$ "
      );
    }

    // Convert to double with 2 decimal places
    double value = double.parse(digitsOnly) / 100;

    // Enforce max value
    if (value > maxValue) {
      value = maxValue;
    }

    final newText = _formatter.format(value);

    return TextEditingValue(
      text: newText,
      selection: TextSelection.collapsed(offset: newText.length),
    );
  }
}

