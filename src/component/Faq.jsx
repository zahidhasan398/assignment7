import React from 'react'
import "./Faq.css"
const Faq = () => {
  return (
    <div>
        <h1 className='ques'>1.what is diffrence between props and state?</h1>
        <p className='ans'>ans: state can not modify or change in other component.props can recieve data from parent component.

        </p>
        <h1 className='ques'>2.how to work useState?</h1>
        <p className='ans'>
         ans: useState is one kind of hook.we declare two thing inside third bracket.
         first one is variable second thing is function.and we set initial value inside useState hook.if we want to change state variable value ,we change value inside of function.
        </p>
        <h1 className='ques'>3.what does work useEffect without data loading?</h1>
        <p className='ans'>
           ans:useEffect also one kind of hook.we can set deppendency inside useEffect hook.if set deppendency variable change useEffect hook call again.and we can get side effect .so whenever we need to make side Effect in our project we can use useEffect.
        </p>
        <h1 className='ques'>4.how does react work?</h1>
        <p className='ans'>
           ans:react is one kind of javascript library.our webside has divided by react component.our webside has similar in look different in data.react think its one kind of component. react convert a component to make virtual dom.if any thing change on state react first time not change on real dom.first time change on virtual dom.then compare real dom and virtual dom.where needed change react change that thing.  
        </p>
    </div>
  )
}

export default Faq