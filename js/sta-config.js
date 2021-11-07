const stateTagApp = {
    namespace: 'vax',
    disk: [localStorage, sessionStorage][0],
    log: console.log,

    format: {
        date: 'Y-MM-DD',
    },

    api: {
        production: "https://cc.vax-wallet.com",
        development: "http://laptop.xxx"
    },

    pay: {
        production: "pk_test_o62iMdPuazIncg2QRD6nv2eL",
        development: "pk_live_qzMHazgTz3An7ztovJc9IlUX"
    },

    //optional
    socket: {
        production: "https://timesocket.io:3030",
        development: "https://timesocket.io:3030"
    }
}
