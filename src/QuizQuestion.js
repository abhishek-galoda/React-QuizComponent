import React , { Component } from 'react'
import Quiz from './Quiz'

import QuizQuestionButton from './QuizQuestionButton'
class QuizQuestion extends Component{


    constructor(props){
        super(props)
        this.state= { incorrectAnswer: false}
    }

   handleClick(button_text){

    if(button_text === this.props.quiz_question.answer){
    this.props.showNextQuestionHandler()
    this.setState((state) =>{
        return this.state.incorrectAnswer=false
    })
    }else{
        this.setState((state) =>{
            return this.state.incorrectAnswer=true
        })

    }
   }
    
    render(){
        return(
            <main>
                {this.state.incorrectAnswer?<p className="error">Wrong Answer</p>:null}
                <section>
                    <p>{ this.props.quiz_question.instruction_text }</p>
                    </section>
                    <section className="buttons">
                    <ul>
                        
                       { this.props.quiz_question.answer_options.map((answer_options, id) => 
                       {
                          return <QuizQuestionButton button_text={answer_options} key= {id}
                          clickHandler={this.handleClick.bind(this)}/>
                       } )}
                            
                        
                    </ul>
                </section>
            </main>
        )
    }
}

export default QuizQuestion