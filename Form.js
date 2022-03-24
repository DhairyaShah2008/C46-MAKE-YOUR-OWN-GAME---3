class button{
constructor(name,x,y){
    this.button=createButton(name)
    this.button.position(x,y)
}
display(){
    this.button.position(x,y)
    this.button.class("buttonStyle")

    this.button.mousePressed(()=>{
        gameState=1 
        console.log(gameState)
    })
    
}
}