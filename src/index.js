import dva from "dva";
import "./index.css";
import { createBrowserHistory as createHistory } from "history";

// 1. Initialize
// const app = dva();

// 实现url地址无 #
const app = dva({
  history: createHistory()
});

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);

// 在model下添加index.js文件 实现自动载入model
require("./models").default.forEach(key => app.model(key.default));

// 4. Router
app.router(require("./router").default);

// 5. Start
app.start("#root");
