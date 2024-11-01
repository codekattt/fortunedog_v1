import React, { useState } from 'react';

export default function NetCarbCalculator() {
    const [totalCarbs, setTotalCarbs] = useState<number | string>(0);
    const [fiber, setFiber] = useState<number | string>(0);
    const [sugarAlcohol, setSugarAlcohol] = useState<number | string>(0);
    const [netCarbs, setNetCarbs] = useState<number>(0);

    const calculateNetCarbs = () => {
        const calculatedNetCarbs =
            (typeof totalCarbs === 'number' ? totalCarbs : 0) -
            (typeof fiber === 'number' ? fiber : 0) -
            (typeof sugarAlcohol === 'number' ? sugarAlcohol : 0);
        setNetCarbs(calculatedNetCarbs);
    };

    const handleInputChange = (
        setState: React.Dispatch<React.SetStateAction<number | string>>,
        value: string
    ) => {
        setState(value === '' ? '' : Number(value));
    };

    const handleFocus = (
        setState: React.Dispatch<React.SetStateAction<number | string>>
    ) => {
        setState('');
    };

    return (
        <section style={styles.container}>
            <header>
                <h2 style={styles.heading}>순탄수 계산기</h2>
            </header>
            <article style={styles.inputGroup}>
                <label htmlFor="totalCarbs" style={styles.label}>
                    총 탄수화물 (g)
                </label>
                <input
                    type="number"
                    id="totalCarbs"
                    value={totalCarbs}
                    onChange={(e) => handleInputChange(setTotalCarbs, e.target.value)}
                    onFocus={() => handleFocus(setTotalCarbs)}
                    placeholder="Enter value"
                    style={styles.input}
                />
            </article>
            <article style={styles.inputGroup}>
                <label htmlFor="fiber" style={styles.label}>
                    식이섬유 (g)
                </label>
                <input
                    type="number"
                    id="fiber"
                    value={fiber}
                    onChange={(e) => handleInputChange(setFiber, e.target.value)}
                    onFocus={() => handleFocus(setFiber)}
                    placeholder="Enter value"
                    style={styles.input}
                />
            </article>
            <article style={styles.inputGroup}>
                <label htmlFor="sugarAlcohol" style={styles.label}>
                    당 알코올 (g)
                </label>
                <input
                    type="number"
                    id="sugarAlcohol"
                    value={sugarAlcohol}
                    onChange={(e) => handleInputChange(setSugarAlcohol, e.target.value)}
                    onFocus={() => handleFocus(setSugarAlcohol)}
                    placeholder="Enter value"
                    style={styles.input}
                />
            </article>
            <output style={styles.resultContainer}>
                <span style={styles.resultLabel}>순탄수화물:</span>
                <span style={styles.resultValue}>{netCarbs}g</span>
            </output>
            <button onClick={calculateNetCarbs} style={styles.button}>
                계산하기
            </button>
        </section>
    );
}

const styles = {
    container: {
        maxWidth: '360px',
        margin: '50px auto',
        padding: '24px',
        borderRadius: '12px',
        backgroundColor: '#F5F5F7',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        textAlign: 'left' as const,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    },
    heading: {
        fontSize: '1.5em',
        fontWeight: '600',
        color: '#333',
        marginBottom: '16px',
    },
    inputGroup: {
        marginBottom: '12px',
    },
    label: {
        fontSize: '0.9em',
        color: '#555',
        marginBottom: '4px',
        display: 'block',
    },
    input: {
        width: '100%',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        fontSize: '1em',
        fontFamily: 'inherit',
        outline: 'none',
        backgroundColor: '#fff',
        transition: 'border-color 0.2s ease-in-out',
    },
    button: {
        width: '100%',
        padding: '12px',
        backgroundColor: '#007AFF',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        fontSize: '1em',
        fontWeight: '500',
        cursor: 'pointer',
        transition: 'background-color 0.2s ease',
        marginTop: '16px',
    },
    resultContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '12px',
        marginTop: '16px',
        borderRadius: '8px',
        backgroundColor: '#FFFFFF',
        color: '#007AFF',
        fontWeight: 'bold',
        fontSize: '1.2em',
        border: '1px solid #007AFF',
    },
    resultLabel: {
        fontWeight: '600',
        fontSize: '1em',
    },
    resultValue: {
        fontSize: '1.5em',
    },
};
