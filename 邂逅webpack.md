# 为什么会出现webpack?

- 前端的快速发展
  - 由最开始的后端JSP、PHP，再到原声JavaScript，再到JQuery，再到现在前端三大框架Vue、React、Angular；
  - 开发方式也从原来的JavaScript的ES5语法，到ES6、7、8、9、10到TypeScript，包括CSS的预处理器less，scss；
  - 现在的开发必须通过模块化来开发
  
# webpack是什么？
```
webpack is a static module bundler for modern JavaScript applications.
webpack是一个静态的模块化打包工具，为现代的JavaScript应用程序。
```
- **我们对上面的解释进行拆解:**
  - 打包bundler：webpack可以帮助我们进行打包，所以它是一个打包工具；
  - 静态的static：这样表述的原因是我们最终可以将代码打包成最终的静态资源（部署到静态服务器）；
  - 模块化module：webpack默认支持各种模块化开发 ES Module、CommonJS、AMD等；
  - 现在的modern：正是因为现代前端开发面临各种问题，才催生了webpack的出生和发展； 

# webpack与vite的对比

- **webpack会被vite取代吗？**
   - vite在推出后引起了很多的反响
   - 目前vue的官方脚手架已经由webpack转向了vite
   - 同时也建议create-react-app转向vite

# vite的思想并非首创

**事实上，vite的很多思想和之前的snowpack是重合的**

#
**webpack也是一直在更新迭代的，在发展的过程中也会不断改进自己，借鉴其他工具的一些优势和思想**