import { useState } from 'react';

function IMCCalculator() {
    const [weight, setWeight] = useState(''); // Peso em kg
    const [height, setHeight] = useState(''); // Altura em metros
    const [bmi, setBMI] = useState(null);     // Resultado do IMC
    const [classification, setClassification] = useState(''); // Classificação

    const calculateBMI = () => {
        if (!weight || !height) {
            alert('Por favor, preencha peso e altura!');
            return;
        }

        const weightNum = parseFloat(weight);
        const heightNum = parseFloat(height);

        if (isNaN(weightNum) || isNaN(heightNum) || heightNum <= 0 || weightNum <= 0) {
            alert('Valores inválidos! Use números maiores que zero.');
            return;
        }

        const bmiValue = (weightNum / (heightNum * heightNum)).toFixed(2);
        setBMI(bmiValue);

        // Classificação do IMC
        let classificationText = '';
        if (bmiValue < 18.5) {
            classificationText = 'Abaixo do peso';
        } else if (bmiValue < 25) {
            classificationText = 'Peso normal';
        } else if (bmiValue < 30) {
            classificationText = 'Sobrepeso';
        } else if (bmiValue < 35) {
            classificationText = 'Obesidade Grau I';
        } else if (bmiValue < 40) {
            classificationText = 'Obesidade Grau II';
        } else {
            classificationText = 'Obesidade Grau III';
        }

        setClassification(classificationText);
    };

    return (
        <div style={{ padding: '20px', maxWidth: '300px', margin: '0 auto' }}>
            <h1>Calculadora de IMC</h1>
            <div>
                <label>
                    Peso (kg):
                    <input
                        type="number"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        placeholder="Ex: 70"
                    />
                </label>
            </div>
            <div>
                <label>
                    Altura (m):
                    <input
                        type="number"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                        placeholder="Ex: 1.75"
                        step="0.01"
                    />
                </label>
            </div>
            <button onClick={calculateBMI}>Calcular IMC</button>
            {bmi !== null && (
                <div>
                    <h2>Resultado</h2>
                    <p>Seu IMC: <strong>{bmi}</strong></p>
                    <p>Classificação: <strong>{classification}</strong></p>
                </div>
            )}
        </div>
    );
}

export default IMCCalculator;