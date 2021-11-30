import Snack from "./Snack";
import Food from "./Food";
import ScorePanel from "./ScorePanel";

//游戏控制类
class GameControl{
    //定义三个属性
    snack: Snack;
    food: Food;
    scorepanel: ScorePanel;

    //定义一个属性用来存取蛇的移动方向（键盘的方向）
    direction: string = 'right';
    //默认蛇是活的
    isLive = true;

    constructor(){
        this.snack = new Snack();
        this.food = new Food();
        this.scorepanel = new ScorePanel();

        //在构造函数完成后就调用
        this.init();

    }

    //游戏的初始化（开始）
    init(){
        //对页面绑定点击事件
        //.bind(this)用来绑定this的指向，使他始终指向GameControl
        document.addEventListener('keydown',this.keydownHandler.bind(this));
        this.run();
    }

    //键盘按下事件
    keydownHandler(event:KeyboardEvent){
        //把键盘按下的方向赋值给蛇移动的方向
        this.direction = event.key;

    }

    //蛇的运动方法
    run(){
        //获取蛇的初始位置
        let X = this.snack.X;
        let Y = this.snack.Y;

        //根据鼠标按下的方向确定蛇的移动方向
        switch (this.direction) {
            case "ArrowUp":
            case "Up":
                //向上走 top 值减小
                Y -= 10;
                break;
            case "ArrowDown":
            case "Down":
                Y += 10;
                break;
            case "ArrowLeft":
            case "Left":
                X -= 10;
                break;
            case "ArrowRight":
            case "Rigth":
                X += 10;
                break; 
        }

        this.checkEat(X,Y);


        // //移动的距离赋给蛇
        try {
            this.snack.X = X;
            this.snack.Y = Y;
        } catch (e) {
            alert(e +'GAME OVER!');
            this.isLive = false;
        }
        this.snack.X = X;
        this.snack.Y = Y;

        //当蛇活的时候，根据定时时间来决定蛇的移动速度
        this.isLive && setTimeout(this.run.bind(this),300-(this.scorepanel.level-1)*30);
    }

    checkEat(X:number,Y:number){
        if(X===this.food.X && Y===this.food.Y){
            this.food.change();
            this.scorepanel.addScore();
            this.snack.addBody();
        }

    }

}
export default GameControl;