class Form {
  constructor() {
    this.input=createInput("");
    this.button=createButton("PLAY")
    this.title=createImg("assets/title.png")
    this.element=createElement("h1")
  }
   display(){
      this.input.position(500,400)
      this.button.position(550,450)
      this.title.position(400, 100)
      this.title.size(500,80)

      this.button.mousePressed(()=>{
        this .input.hide()
        this.button.hide()
        this.element.html("hi welcome " +this.input.value())
        this.element.position(500,400)
      })
   }
}
