// this version of sass is compatible with Bootstrap 5.3.3 and Vite 6.1.0
//npm i -D sass@1.77.6 --save-exact
import { resolve } from 'path'

export default {
  root: resolve(__dirname, 'src'),
  build: {
    outDir: '../dist'
  },
  server: {
    port: 8080
  }
}
