var path = require('path'); //importando o path que é um componente do node

//importando plugins baixados
var CleanWebpackPlugin = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

//configurações do Webpack
module.exports = {
    devtool: 'source-map', //vai gerar um mapa fazendo com que ele mostre exatamente a classe que aconteceu o erro na hora de debugar o código
    entry: './src/js/Main', //o código de entrada do projeto
    output: { //todas as saídas do projeto que vão gerar um único arquivo
        path: path.resolve(__dirname, 'bin/js'), //bin é a pasta que vai para o cliente
        filename: 'script.js' //qual o nome que quero dar pro meu arquivo
    },
    //configuração dos testes para os arquivos
    module: {
        rules: [
            //definição das regras para o webpack verificar os arquivos
            {
                test: /\.js$/, //tipo do arquivo que será verificado gerados na pasta src
                include: [path.resolve(__dirname, 'src/js')], //determina apenas as pastas que interessam
                loader: 'babel-loader', //arquivo que vai carregar esse js e fazer as modificações necessárias
                options: { //configurações do babel
                    presets: ['env'],
                    plugins: [ //incluindo os plugins baixados; importante estarem nessa ordem para funcionarem corretamente
                        'babel-plugin-transform-private-properties',
                        'transform-decorators-legacy',
                        'transform-class-properties',
                        'transform-object-rest-spread',
                        'transform-strict-mode'
                    ]
                }
            }
        ]
    },
    plugins: [ //plugins do webpack
        new CleanWebpackPlugin(['bin'], { //serve para limpar a pasta bin de arquivos indesejados
            verbose: true
        }),
        new HtmlWebpackPlugin({
            title: 'Aula de Javascript 2017',
            filename: '../index.html', //arquivo html deve ficar fora da js
            inject: 'head', //aonde queremos injetar nosso script
            minify: { //se já quer mandar pra lá minificado
                collapseWhitespace: true
            }
        }),
        new BrowserSyncPlugin({ //gera um servidor local
            host: 'localhost',
            port: 9000, //para não ter nenhum conflito com outras portas
            server: {
                baseDir: ['./bin'] //a pasta que ele vai ficar observando
            }
        })
    ],
    watch: true
}
