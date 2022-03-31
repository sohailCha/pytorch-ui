import React, { Component } from 'react'
import Select from 'react-select'


const options = [
    { value : 'C#', label: 'C#'},
    { value : 'Go', label: 'Go'},
    { value : 'Java', label: 'Java'},
    { value : 'Node.js', label: 'Node.js'},
    { value : 'PHP', label: 'PHP'},
    { value : 'Python', label: 'Python'},
    { value : 'Ruby', label: 'Ruby'},
    { value : 'C++', label: 'C++'},
    { value : 'Groovy', label: 'Groovy'},
    { value : 'Kotlin', label: 'Kotlin'},
    { value : 'Swift', label: 'Swift'},
    { value : 'Rust', label: 'Rust'},
    { value : 'Dart', label: 'Dart'},
    { value : 'Javascript', label: 'Javascript'},
    { value : 'Jython', label: 'Jython'},
    { value : 'Haskell', label: 'Haskell'},
    { value : 'Fortran', label: 'Fortran'},
    { value : 'Darwin', label: 'Darwin'},
    { value : 'TypeScript', label: 'TypeScript'},
    { value : 'Z++', label: 'Z++'}
]

export default class GoogleSnippet extends Component {

  constructor(props){
    super(props)
    this.state = {
      languageValue:"Language",
     // languageDes:""
    }

      


  }
  onChangeDescription = (e) =>{
    console.log(e.value)
    this.setState({
      languageValue:e.value
    })
}


  render() {
  return (
    <div className='mainBox'>
        <Select className='selectBox' options={options} onChange={this.onChangeDescription}/>
        <div className='contentBox'>
            <p className='info'>{`For more information, see Setting Up a ${this.state.languageValue} Development Environment.`}</p>
            <div className='command'>
            {`Install-Package ${this.state.languageValue==='Language'? '':this.state.languageValue}`}
            </div>
        </div>
    </div>
  )
}
}