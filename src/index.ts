import * as server from './services';
import { PORT } from './config';

(() => {
  try {
    server.app.listen(PORT, () => {
      console.log(`Server has been started on: http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error(`Error: ${err}`);
  }
})();

process.on('SIGINT', () => {
  process.exit();
});
