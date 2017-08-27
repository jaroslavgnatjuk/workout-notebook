webpackJsonp([1,4],{151:function(e,t,i){"use strict";var n=i(0),r=i(309);i.d(t,"a",function(){return s});var c=this&&this.__decorate||function(e,t,i,n){var r,c=arguments.length,o=c<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(c<3?r(o):c>3?r(t,i,o):r(t,i))||o);return c>3&&o&&Object.defineProperty(t,i,o),o},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},s=function(){function e(e){this.http=e}return e.prototype.getExercises=function(){return this.http.get("/api/exercises")},e.prototype.getExerciseFacts=function(){return this.http.get("/api/exercise-facts-today")},e.prototype.getExerciseFactsByExerciseId=function(e){return this.http.get("/api/exercise-facts/"+e)},e.prototype.deleteFact=function(e){return this.http.delete("/api/exercise-facts?id="+e)},e.prototype.getFactsByDate=function(e){return this.http.get("/api/exercise-facts?dt="+encodeURIComponent(e))},e.prototype.getFactsAllDays=function(){return this.http.get("/api/exercise-facts-all-days")},e.prototype.addExerciseFact=function(e,t,i){var n=new r.b({"Content-Type":"application/json"}),c=new r.c({headers:n}),o={id:0,exerciseId:e,count:t,weight:i},s=JSON.stringify(o);return this.http.post("/api/exercise-facts",s,c)},e.prototype.editExercise=function(e){var t=new r.b({"Content-Type":"application/json"}),i=new r.c({headers:t}),n=JSON.stringify(e);return this.http.put("/api/exercise",n,i)},e.prototype.addExercise=function(e,t){var i=new r.b({"Content-Type":"application/json"}),n=new r.c({headers:i});return this.http.post("/api/exercise?title="+encodeURIComponent(t)+"&category="+encodeURIComponent(e),{},n)},e=c([i.i(n.c)(),o("design:paramtypes",["function"==typeof(t=void 0!==r.d&&r.d)&&t||Object])],e);var t}()},386:function(e,t){function i(e){throw new Error("Cannot find module '"+e+"'.")}i.keys=function(){return[]},i.resolve=i,e.exports=i,i.id=386},387:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(474),r=i(0),c=i(510),o=i(505);c.a.production&&i.i(r.a)(),i.i(n.a)().bootstrapModule(o.a)},504:function(e,t,i){"use strict";var n=i(0);i.d(t,"a",function(){return o});var r=this&&this.__decorate||function(e,t,i,n){var r,c=arguments.length,o=c<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(c<3?r(o):c>3?r(t,i,o):r(t,i))||o);return c>3&&o&&Object.defineProperty(t,i,o),o},c=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},o=function(){function e(){}return e=r([i.i(n.Q)({selector:"app-root",template:i(669),styles:[i(664)]}),c("design:paramtypes",[])],e)}()},505:function(e,t,i){"use strict";var n=i(0),r=i(83),c=i(504),o=i(508),s=i(465),a=i(148),d=i(309),f=i(509),p=i(214),u=i(506),l=i(151),h=i(507);i.d(t,"a",function(){return g});var y=this&&this.__decorate||function(e,t,i,n){var r,c=arguments.length,o=c<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(c<3?r(o):c>3?r(t,i,o):r(t,i))||o);return c>3&&o&&Object.defineProperty(t,i,o),o},x=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},b=[{path:"",redirectTo:"/train",pathMatch:"full"},{path:"train",component:f.a},{path:"history",component:o.a},{path:"history-exercise",component:h.a},{path:"**",redirectTo:"/train"}],g=function(){function e(){}return e=y([i.i(n.b)({imports:[p.a.forRoot(b),a.a,r.a,s.a,d.a],declarations:[c.a,o.a,f.a,u.a,h.a],bootstrap:[c.a],providers:[l.a]}),x("design:paramtypes",[])],e)}()},506:function(e,t,i){"use strict";var n=i(0);i.d(t,"a",function(){return o});var r=this&&this.__decorate||function(e,t,i,n){var r,c=arguments.length,o=c<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(c<3?r(o):c>3?r(t,i,o):r(t,i))||o);return c>3&&o&&Object.defineProperty(t,i,o),o},c=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},o=function(){function e(){}return e=r([i.i(n.Q)({selector:"app-header",template:i(670),styles:[i(665)]}),c("design:paramtypes",[])],e)}()},507:function(e,t,i){"use strict";var n=i(0),r=i(214),c=i(151);i.d(t,"a",function(){return a});var o=this&&this.__decorate||function(e,t,i,n){var r,c=arguments.length,o=c<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(c<3?r(o):c>3?r(t,i,o):r(t,i))||o);return c>3&&o&&Object.defineProperty(t,i,o),o},s=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},a=function(){function e(e,t){this.activatedRoute=e,this.dbService=t}return e.prototype.ngOnInit=function(){var e=this;this.activatedRoute.queryParams.subscribe(function(t){var i=t.exerciseId;e.dbService.getExerciseFactsByExerciseId(i).subscribe(function(t){e.exerciseFacts=t.json()})})},e=o([i.i(n.Q)({selector:"app-history-exercise",template:i(671),styles:[i(666)]}),s("design:paramtypes",["function"==typeof(t=void 0!==r.b&&r.b)&&t||Object,"function"==typeof(a=void 0!==c.a&&c.a)&&a||Object])],e);var t,a}()},508:function(e,t,i){"use strict";var n=i(0),r=i(151);i.d(t,"a",function(){return s});var c=this&&this.__decorate||function(e,t,i,n){var r,c=arguments.length,o=c<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(c<3?r(o):c>3?r(t,i,o):r(t,i))||o);return c>3&&o&&Object.defineProperty(t,i,o),o},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},s=function(){function e(e){this.dbService=e,this.days=[]}return e.prototype.ngOnInit=function(){var e=this;this.dbService.getFactsAllDays().subscribe(function(t){e.days=t.json()}),this.dbService.getExercises().subscribe(function(t){e.exercises=t.json()})},e.prototype.getExerciseById=function(e){return this.exercises&&this.exercises.filter(function(t){return t.id===e})[0]},e.prototype.showHistory=function(e){var t=this;this.dbService.getFactsByDate(e).subscribe(function(e){t.exerciseFacts=e.json(),console.log(t.exerciseFacts)})},e=c([i.i(n.Q)({selector:"app-history",template:i(672),styles:[i(667)]}),o("design:paramtypes",["function"==typeof(t=void 0!==r.a&&r.a)&&t||Object])],e);var t}()},509:function(e,t,i){"use strict";var n=i(0),r=i(151),c=i(214);i.d(t,"a",function(){return a});var o=this&&this.__decorate||function(e,t,i,n){var r,c=arguments.length,o=c<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(c<3?r(o):c>3?r(t,i,o):r(t,i))||o);return c>3&&o&&Object.defineProperty(t,i,o),o},s=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},a=function(){function e(e,t){this.dbService=e,this.router=t,this.exercisesMap=[],this.selectedCategory="грудь"}return e.prototype.ngOnInit=function(){this.refreshExercises(),this.refreshFacts()},e.prototype.refreshExercises=function(){var e=this;this.dbService.getExercises().subscribe(function(t){e.exercises=t.json(),console.log(t),e.exercisesMap=e.exerciseToMap(e.exercises),e.categories=Object.keys(e.exercisesMap)})},e.prototype.refreshFacts=function(){var e=this;this.dbService.getExerciseFacts().subscribe(function(t){e.exerciseFacts=t.json(),console.log(t)})},e.prototype.getExerciseById=function(e){return this.exercises&&this.exercises.filter(function(t){return t.id===e})[0]},e.prototype.exerciseToMap=function(e){var t={};return e.forEach(function(e){t[e.category]||(t[e.category]=[]),t[e.category].push(e)}),t},e.prototype.deleteFact=function(e){var t=this;return this.dbService.deleteFact(e).subscribe(function(){return t.refreshFacts()})},e.prototype.addExerciseFact=function(e,t,i){var n=this;if(void 0===e)return void alert("Не выбрано упражнение");this.dbService.addExerciseFact(e,t,i).subscribe(function(e){console.log(e),n.refreshFacts()})},e.prototype.editExercise=function(e){var t=this,i=this.exercises.filter(function(t){return t.id==e})[0],n=prompt("Введите название упражнения",i.title);if(i&&n){var r={title:n,category:i.category,id:i.id};this.dbService.editExercise(r).subscribe(function(e){console.log(e),t.refreshExercises()})}},e.prototype.showHistory=function(e){if(!e)return void alert("Выберите упражнение");this.router.navigate(["history-exercise"],{queryParams:{exerciseId:e}})},e.prototype.addExercise=function(){var e=this,t=prompt("Введите название упражнения");t&&this.dbService.addExercise(this.selectedCategory,t).subscribe(function(t){console.log(t),e.refreshExercises()})},e.prototype.copyFact=function(e,t,i){var n=this.getExerciseById(e);this.selectedExerciseId=e,this.selectedCategory=n.category,this.count=t,this.weight=i},e=o([i.i(n.Q)({selector:"app-train",template:i(673),styles:[i(668)]}),s("design:paramtypes",["function"==typeof(t=void 0!==r.a&&r.a)&&t||Object,"function"==typeof(a=void 0!==c.c&&c.c)&&a||Object])],e);var t,a}()},510:function(e,t,i){"use strict";i.d(t,"a",function(){return n});var n={production:!0}},664:function(e,t){e.exports=""},665:function(e,t){e.exports=".header-container{background-color:#666;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding:5px}.header-container .title-container a{color:#bbb}.header-container .buttons-container a{color:#eee;font-weight:700;text-decoration:none}"},666:function(e,t){e.exports=".history-exercise-container,.history-exercise-container table{width:100%}"},667:function(e,t){e.exports=".fact-table{width:100%}.fact-table .bordered td{border-bottom:1px solid #ddd}"},668:function(e,t){e.exports=".categories{display:-webkit-box;display:-ms-flexbox;display:flex;margin-bottom:5px;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.categories div{font-size:.8em;margin-left:10px}.select-exercise{width:100%}.digits,.select-exercise{display:-webkit-box;display:-ms-flexbox;display:flex}.digits{margin-top:10px;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.digits input{width:50px}.done{margin-top:10px;border-top:1px solid gray}.fact-table{width:100%}.fact-table .bordered td{border-bottom:1px solid #ddd}"},669:function(e,t){e.exports="<app-header></app-header>\n<router-outlet></router-outlet>\n"},670:function(e,t){e.exports='<div class="header-container">\n\n  <div class="title-container">\n    <a class="app-title cursor-pointer" [routerLink]="[\'train\']">WN</a>\n  </div>\n\n  <div class="buttons-container">\n    <a class="cursor-pointer" [routerLink]="[\'history\']">history</a>\n  </div>\n</div>\n'},671:function(e,t){e.exports='<div class="history-exercise-container">\n  <table>\n    <tr>\n      <td>дата</td>\n      <td>к-во</td>\n      <td>вес</td>\n    </tr>\n    <tr *ngFor="let fact of exerciseFacts; let i = index">\n      <td>{{fact.dt | date:\'y-MM-dd HH:mm:ss\'}}</td>\n      <td>{{fact.count}}</td>\n      <td>{{fact.weight}}</td>\n    </tr>\n  </table>\n</div>\n'},672:function(e,t){e.exports='<select [(ngModel)]="selectedDay" class="select-exercise" (change)="showHistory(selectedDay)">\n  <option *ngFor="let day of days" [value]="day.dt">{{day.dt}}</option>\n</select>\n\n<table class="fact-table">\n  <tr>\n    <th>упр</th>\n    <th>к-во</th>\n    <th>вес</th>\n    <th>время</th>\n  </tr>\n  <tr *ngFor="let exercise of exerciseFacts; let i = index;" [ngClass]="{bordered: (exerciseFacts[i + 1] && exerciseFacts[i + 1].exerciseId) != exercise.exerciseId}">\n    <td>{{getExerciseById(exercise?.exerciseId)?.title}}</td>\n    <td>{{exercise.count}}</td>\n    <td>{{exercise.weight}}</td>\n    <td>{{exercise.dt  | date:\'HH:mm:ss\'}}</td>\n  </tr>\n</table>\n'},673:function(e,t){e.exports='<div class="categories">\n  <div *ngFor="let category of categories">\n    {{category}}\n    <input name="category" type="radio" [value]="category" [(ngModel)]="selectedCategory">\n  </div>\n</div>\n\n<div class="select-exercise">\n  <select [(ngModel)]="selectedExerciseId" class="select-exercise">\n    <option *ngFor="let exercise of exercisesMap[selectedCategory]" [value]="exercise.id">{{exercise.title}}</option>\n  </select>\n  <button (click)="editExercise(selectedExerciseId)">edit</button>\n  <button (click)="addExercise()">+</button>\n  <button (click)="showHistory(selectedExerciseId)">hist</button>\n</div>\n\n<div class="digits">\n  <div>\n  к-во:\n  <input type="number" [(ngModel)]="count">\n  </div>\n  <div>\n  вес:\n  <input type="number" [(ngModel)]="weight">\n  </div>\n\n  <button (click)="addExerciseFact(selectedExerciseId, count, weight)">save</button>\n\n</div>\n\n<div class="done">\n  <table class="fact-table">\n    <tr>\n      <th>упр</th>\n      <th>к-во</th>\n      <th>вес</th>\n      <th></th>\n    </tr>\n    <tr *ngFor="let exercise of exerciseFacts; let i = index;" [ngClass]="{bordered: (exerciseFacts[i + 1] && exerciseFacts[i + 1].exerciseId) != exercise.exerciseId}">\n      <td>{{getExerciseById(exercise?.exerciseId)?.title}}</td>\n      <td>{{exercise.count}}</td>\n      <td>{{exercise.weight}}</td>\n      <td>\n        <button (click)="deleteFact(exercise.id)">x</button>\n      </td>\n      <td>\n        <button (click)="copyFact(exercise.exerciseId, exercise.count, exercise.weight)">copy</button>\n      </td>\n    </tr>\n  </table>\n</div>\n'},690:function(e,t,i){e.exports=i(387)}},[690]);