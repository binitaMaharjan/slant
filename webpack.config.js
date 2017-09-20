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
            Analytics: 'app/component/Analytics.jsx',
            TopNav: 'app/component/TopNav.jsx',
            Review: 'app/component/Review.jsx',
            LocationDropDown: 'app/component/LocationDropDown.jsx',
            loginApi:'app/api/loginApi.jsx',
            locationDropDownApi:'app/api/locationDropDownApi.jsx',
            getCurrentUser:'app/api/getCurrentUser.jsx',
            LocationStats:'app/api/LocationStats.jsx',

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
    devtool:'cheap-module-eval-source-map'
};