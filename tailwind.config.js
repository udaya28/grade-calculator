module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: 'rgba(45, 212, 191, 1)',
                secondary: 'rgba(24, 26, 27, 0.6)',
                white: 'rgba(255, 255, 255, 0.8)',
                whiteLight: 'rgba(255, 255, 255, 0.6)',
            },
            keyframes: {
                'fade-in-down': {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(-30%)',
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)',
                    },
                },
            },
            animation: {
                'fade-in-down': 'fade-in-down 0.35s ease-out',
            },
        },
    },
    plugins: [],
}
