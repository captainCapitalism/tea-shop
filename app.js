const   express         = require("express"),
        bodyParser      = require("body-parser"),
        passport        = require("passport"),
        LocalStrategy   = require("passport-local"),
        User            = require("./models/user"),
        app             = express();
    
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.set("view engine", "ejs");
app.use(express.static(__dirname + '/scripts'));
app.use(express.static(__dirname + "/public"));

// connect to db
const   mongoose    = require("mongoose"),
        dbURL       = process.env.DATABASEURL || "mongodb://localhost:27017/tea-shop";
mongoose.connect(dbURL, {useNewUrlParser: true}, (err) => {
    if(err){
        console.log("Something went wrong");
        console.log(err);
    } else {
        console.log("connected to mongo");
    }
});

app.use(require("express-session")({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false
}));

// passport config

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


// routes
const   indexRoutes         = require("./routes/index"),
        orderRoutes         = require("./routes/orders"),
        itemRoutes          = require("./routes/items"),
        menuRoutes          = require("./routes/menu"),
        summaryRoutes       = require("./routes/summary"),
        tasksRoutes         = require("./routes/tasks"),
        reservationsRoutes         = require("./routes/reservations"),
        archiveRoutes       = require("./routes/archive");

app.use("/order",           orderRoutes);
app.use("/item",            itemRoutes);
app.use("/menu",            menuRoutes);
app.use("/archive",         archiveRoutes);
app.use("/reservations",    reservationsRoutes);
app.use("/summary",         summaryRoutes);
app.use("/task",            tasksRoutes);
app.use("/",                indexRoutes);


// menu seed
var seedMenu = require("./db_seeds/seedMenuItems");

// server start
app.listen(process.env.PORT || 3000, process.env.IP, () => { console.log("The tea-shop server is on"); });
