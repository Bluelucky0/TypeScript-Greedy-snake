//创建食物类
class Food{
    element: HTMLElement;

    constructor(){
        //获取页面中食物的元素并赋值给element
        this.element = document.getElementById('food')!;
    }
    //定义一个获取食物元素的X坐标
    get X(){
        return this.element.offsetLeft;
    }
    //定义一个获取食物元素的Y坐标
    get Y(){
        return this.element.offsetTop;
    }

    //食物位置的方法
    change(){
        let X = Math.round(Math.random()*29)*10;
        let Y = Math.round(Math.random()*29)*10;
    
        this.element.style.left = X +"px";
        this.element.style.top = Y +"px";
    }

}

export default Food;