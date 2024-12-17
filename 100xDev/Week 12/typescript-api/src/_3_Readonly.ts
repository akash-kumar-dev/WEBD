// Readonly: make all properties readonly

// interface Config {
//     readonly endpoint: string;
//     readonly apiKey: string;
// }

// const config: Config = {
//     endpoint: '',
//     apiKey: ''
// };

interface Config {
    endpoint: string;
    apiKey: string;
}

const config: Readonly<Config> = {
    endpoint: '',
    apiKey: ''
};

// config.endpoint = 'https://api.example.com';    // error