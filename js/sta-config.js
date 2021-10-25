const stateTagApp = {
    namespace: 'vax',
    disk: [localStorage, sessionStorage][0],
    log: console.log,

    format: {
        date: 'Y-MM-DD',
    },

    api: {
        production: "https://processor.vax-wallet.com",
        development: "https://processor.vax-wallet.test"
    },

    //optional
    socket: {
        production: "https://timesocket.io:3030",
        development: "https://timesocket.io:3030"
    }
}
