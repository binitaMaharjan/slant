var webpack = require('webpack');
module.exports={
    entry: [
        'script!jquery/dist/jquery.min.js',
        './app/app.jsx'
    ],
    externals:{
        jquery:'jQuery'
    },
    plugins:[
        new webpack.ProvidePlugin({
            '$':'jquery',
            'jQuery':'jquery'
        })
    ],
    output: {
        path: __dirname,
        filename:'./public/bundle.js'
    },
    resolve:{
        root:__dirname,
        alias:{
            LoginForm: 'app/component/LoginForm.jsx',
           LoginMessage: 'app/component/LoginMessage.jsx',
            Login: 'app/component/Login.jsx',
            Dashboard: 'app/component/Dashboard.jsx',
            NavSideBar: 'app/component/NavSideBar.jsx',
            loginApi:'app/api/loginApi.jsx',
            loginApi: 'app/api/loginApi.jsx',
            getCurrentUserApi: 'app/api/getCurrentUser.jsx'


        },
        extensions:['','.js','.jsx']
    },
    module:{
        loaders:[
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_component)/
            }
        ]

    },
    devtool: 'cheap-module-eval-source-map'
};