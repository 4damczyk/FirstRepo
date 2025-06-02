<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kalkulator</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f5f5f5;
        }
        .calculator {
            background-color: #fff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            text-align: center;
            width: 320px;
        }
        .calculator input[type="text"] {
            width: calc(100% - 20px);
            padding: 10px;
            margin: 10px 0;
            border: 1px solid #ccc;
            border-radius: 5px;
            text-align: right;
            font-size: 18px;
        }
        .calculator .buttons {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 10px;
        }
        .calculator input[type="submit"], .calculator input[type="button"] {
            width: 100%;
            padding: 20px;
            background-color: #007BFF;
            border: none;
            border-radius: 5px;
            color: #fff;
            font-size: 16px;
            cursor: pointer;
        }
        .calculator input[type="submit"]:hover, .calculator input[type="button"]:hover {
            background-color: #0056b3;
        }
        .calculator .equals {
            grid-column: span 4;
        }
    </style>
</head>
<body>
    <div class="calculator">
        <form method="post" action="">
            <input type="hidden" name="expression" id="expression">
            <input type="text" id="display" readonly value="<?php echo isset($_POST['result']) ? htmlspecialchars($_POST['result']) : ''; ?>">
            <div class="buttons">
                <input type="button" value="1" onclick="appendNumber('1')">
                <input type="button" value="2" onclick="appendNumber('2')">
                <input type="button" value="3" onclick="appendNumber('3')">
                <input type="button" value="C" onclick="clearDisplay()">
                <input type="button" value="4" onclick="appendNumber('4')">
                <input type="button" value="5" onclick="appendNumber('5')">
                <input type="button" value="6" onclick="appendNumber('6')">
                <input type="button" value="-" onclick="appendOperator('-')">
                <input type="button" value="7" onclick="appendNumber('7')">
                <input type="button" value="8" onclick="appendNumber('8')">
                <input type="button" value="9" onclick="appendNumber('9')">
                <input type="button" value="+" onclick="appendOperator('+')">
                <input type="button" value="0" onclick="appendNumber('0')">
                <input type="button" value="." onclick="appendDecimal('.')">
                <input type="button" value="*" onclick="appendOperator('*')">
                <input type="button" value="/" onclick="appendOperator('/')">
                <input type="submit" value="=" class="equals">
            </div>
        </form>
        <?php
        if ($_SERVER['REQUEST_METHOD'] == 'POST') {
            $expression = str_replace(',', '.', $_POST['expression']);
            try {  
                $result = eval("return $expression;");
                echo '<script>
                        document.getElementById("display").value = "'.htmlspecialchars($expression).' = '.htmlspecialchars($result).'";
                        currentInput = "'.htmlspecialchars($expression).' = '.htmlspecialchars($result).'";
                      </script>';
            } catch (Exception $e) {
                echo '<script>
                        document.getElementById("display").value = "Błąd: '.htmlspecialchars($e->getMessage()).'";
                      </script>';
            }
        }
        ?>
    </div>
    
    <script>
        let currentInput = '<?php echo isset($_POST['expression']) ? htmlspecialchars($_POST['expression']) : ''; ?>';

        function appendNumber(number) {
            currentInput += number;
            document.getElementById('display').value = currentInput;
        }

        function appendOperator(operator) {
            if (currentInput !== '' && !isNaN(currentInput.slice(-1))) {
                currentInput += operator;
                document.getElementById('display').value = currentInput;
            }
        }

        function appendDecimal(decimal) {
            if (currentInput === '' || isNaN(currentInput.slice(-1))) {
                return;
            }
            let currentNumber = currentInput.split(/[\+\-\*\/]/).pop();
            if (!currentNumber.includes('.')) {
                currentInput += decimal;
                document.getElementById('display').value = currentInput;
            }
        }

        function clearDisplay() {
            currentInput = '';
            document.getElementById('display').value = '';
        }

        document.querySelector('form').addEventListener('submit', function(event) {
            event.preventDefault();
            document.getElementById('expression').value = currentInput;
            this.submit();
        });
    </script>
</body>
</html>
