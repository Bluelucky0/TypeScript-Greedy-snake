//记分牌的类
class ScorePanel{
    //用来记录分数和等级
    score = 0;
    level = 1;

    //分数和等级元素在构造函数中进行初始化
    scoreEle: HTMLElement;
    levelEle: HTMLElement;

    //最大等级
    maxLevel: number;
    //达到升级的最大分数
    upScore: number;

    constructor(maxLevel: number = 10,upScore: number =10){
        this.scoreEle = document.getElementById('score')!;
        this.levelEle = document.getElementById('level')!;
        this.maxLevel = maxLevel;
        this.upScore = upScore;

    }

    //加分的方法
    addScore(){
        //方法调用一次加一分
        this.scoreEle.innerHTML = ++this.score +'';
        //判断分数是否整除10，整除升一级
        if(this.score % this.upScore ===0){
            this.levelUp();
        }
    }

    //升级的方法
    levelUp(){
        //判断当前的等级是否小于最大等级，否就升级
        if(this.level < this.maxLevel){
            this.levelEle.innerHTML = ++this.level +'';
        }
    }


}
export default ScorePanel;