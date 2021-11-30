//设置蛇的类
class Snack{
    //蛇头
    head: HTMLElement;
    //蛇身体
    bodies: HTMLCollection;
    element: HTMLElement;

    constructor(){
        this.element = document.getElementById('snack')!;
        //as HTMLElement断言，确定是这个类型
        this.head = document.querySelector('#snack > div') as HTMLElement;
        this.bodies = this.element.getElementsByTagName('div');
    }

    //定义获取蛇头的位置
    get X(){
        return this.head.offsetLeft;
    }
    get Y(){
        return this.head.offsetTop;
    }

    //给蛇头设置值
    set X(value:number){
        if(this.X === value){
            return;
        }

        if(value <0 || value >290){
            throw new Error('蛇撞墙了！');
        }

        
        //当第二节身体存在时，如果第二节身体和第一节身体位置相同时，说明发生了掉头
        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value){
            //如果掉头，说明蛇原来是向左走的，此时应该禁止蛇掉头，让他继续向左走
            if(value > this.X){
              value = this.X -10;  
            }else{
                value = this.X +10;
            }
        }
        
        //调用蛇身体的移动
        this.moveBoy();
        this.head.style.left = value +'px';
        //调用蛇是否撞到自己
        this.checkHeadBody();
    }
    set Y(value:number){
        if(this.Y === value){
            return;
        }

        if(value <0 || value >290){
             throw new Error('蛇撞墙了！');
        }
       
        

        //当第二节身体存在时，如果第二节身体和第一节身体位置相同时，说明发生了掉头
        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value){
            //如果掉头，说明蛇原来是向左走的，此时应该禁止蛇掉头，让他继续向左走
            if(value > this.Y){
              value = this.Y -10;  
            }else{
                value = this.Y +10;
            }
        }

        //调用蛇身体的移动
        this.moveBoy();
        this.head.style.top = value +'px';
         //调用蛇是否撞到自己
        this.checkHeadBody();
    }

    //定义蛇的身体增加的方法
    addBody(){
        this.element.insertAdjacentHTML("beforeend","<div></div>")
    }

    //移动蛇的身体
    moveBoy(){
        //倒着循环，让后面的一节身体去到他前面一节身体的位置
        for(let i = this.bodies.length-1;i > 0;i--){

            //获取蛇当前一节身体的前面一节身体的坐标
            let X = (this.bodies[i-1]as HTMLElement).offsetLeft;
            let Y = (this.bodies[i-1]as HTMLElement).offsetTop;

           
            //把前面一节身体的坐标赋给当前身体
            (this.bodies[i] as HTMLElement).style.left = X +'px';
            (this.bodies[i] as HTMLElement).style.top = Y +'px';
            
            
        }
    }


    //检查是否撞到自己的身体了
    checkHeadBody(){
        for(let i=1;i<this.bodies.length;i++){
            //如果蛇头的坐标和身体的坐标一样了，代表撞到自己了
            if(this.X === (this.bodies[i] as HTMLElement).offsetLeft && this.Y === (this.bodies[i] as HTMLElement).offsetTop){
              throw new Error('撞到自己了！');
              
            }
        }
    }
}
export default Snack;