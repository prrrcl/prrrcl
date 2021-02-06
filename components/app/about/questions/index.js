import questionsService from 'components/services/questions'
import { useEffect, useRef, useState } from 'react'
import { random } from 'lodash'
import {
  Button,
  Form,
  Input,
  InputWrapper,
  Label,
  QuestionMobile,
  QuestionsWrapper,
  QuestionText,
  AnswerText
} from './comps'
import Question from './questionItem'
import gsap from 'gsap'
import { useFormik } from 'formik'
import * as Yup from 'yup'

function isMobile () {
  try { document.createEvent('TouchEvent'); return true } catch (e) { return false }
}

export default function Questions () {
  const [questions, setQuestions] = useState([])
  const [inView, setInview] = useState([])
  const [message, setMessage] = useState()
  const messageRef = useRef()
  const cardRef = useRef()
  const wrapperRef = useRef()

  const newMessage = () => {
    setMessage(true)
    gsap.from(
      messageRef.current,
      {
        alpha: 0,
        y: -10,
        ease: 'power3.out',
        duration: 1,
        onComplete: () => {
          setTimeout(() => {
            gsap.to(
              messageRef.current,
              {
                y: 10,
                alpha: 0,
                ease: 'power3.out',
                onComplete: () => setMessage(false)
              }
            )
          }, 3000)
        }
      }
    )
  }

  const form = useFormik({
    initialValues: {
      name: '',
      question: ''
    },
    validationSchema: Yup.object({
      name: Yup.string(),
      question: Yup.string().required('This field is required')
    }),
    onSubmit: (values, { resetForm }) => {
      questionsService.addQuestion(values)
        .then(d => {
          newMessage()
          resetForm()
        })
    }
  })

  const handleDeleteInView = () => {
    if (inView.length === questions.length) {
      setInview([])
    }
  }

  const showItems = () => {
    gsap.to(
      cardRef.current,
      {
        height: 380,
        alpha: 1
      }
    )
    gsap.to(
      cardRef.current.children[0], {
        y: 0,
        alpha: 1
      }
    )
    gsap.to(
      cardRef.current.children[1],
      {
        y: 0
      }
    )
    gsap.to(
      cardRef.current.children[2],
      {
        y: 0,
        alpha: 1
      }
    )
  }

  const hideItems = () => {
    gsap.to(
      cardRef.current,
      {
        height: 260,
        alpha: 0.5
      }
    )

    gsap.to(
      cardRef.current.children[0], {
        y: 10,
        alpha: 0
      }
    )
    gsap.to(
      cardRef.current.children[1],
      {
        y: -50
      }
    )
    gsap.to(
      cardRef.current.children[2],
      {
        y: -10,
        alpha: 0
      }
    )
  }

  useEffect(() => {
    questionsService.getQuestions()
      .then(setQuestions)
      .catch(e => console.log(e))
  }, [])

  useEffect(() => {
    if (questions.length) {
      const addInterval = setInterval(() => {
        const i = random(0, questions.length - 1)
        const question = questions[i]
        if (!inView.some((q) => q.id === question.id)) {
          setInview(old => ([...old, questions[i]]))
        }
      }, 3500)

      return () => {
        if (addInterval) {
          clearInterval(addInterval)
        }
      }
    }
  }, [questions, inView])

  return (
    <>
     {isMobile() && (
        <QuestionMobile>
        <h3>Some questions they have asked me</h3>
        {inView.map((q, i) => (
          <div key={i}>
            <QuestionText>
            &quot;{q.question}&quot; - {q.name}
            </QuestionText>
            <AnswerText>
        {q.answer}
      </AnswerText>
          </div>
        ))}
        </QuestionMobile>
     )}
    <QuestionsWrapper ref={wrapperRef}>
      {!isMobile() && inView.map((q, i) => (
        <Question
         data={q}
         key={i}
         index={i}
         callback={handleDeleteInView}
         limits={{
           width: wrapperRef.current.clientWidth - 100,
           height: wrapperRef.current.clientHeight - 100
         }}/>
      ))}
      <Form onSubmit={form.handleSubmit}>
      <InputWrapper ref={cardRef} style={{ height: 260, opacity: 0.5 }} onMouseEnter={showItems} onMouseLeave={hideItems}>

        <Label style={{ transform: 'translate(0, 10px)', opacity: 0 }}>
          <p>Your name</p>
          <Input
            autoComplete="off"
            name="name"
            value={form.values.name}
            onChange={form.handleChange}
            className="anon"
            placeholder="If you want, you can let empty for anonymous question" />
            {form.errors.name && form.touched.name && <p className="error">{form.errors.name}</p>}
        </Label>

      <Label style={{ transform: 'translate(0, -50px)' }}>
        <p>
        Do you want to know more about me?
        </p>
        <Input
          autoComplete="off"
          name="question"
          value={form.values.question}
          onChange={form.handleChange}
          placeholder="Ask me what you want..." />
          {form.errors.question && form.touched.question && <p className="error">{form.errors.question}</p>}
          {message && <p ref={messageRef} className="thanks">🎉 Thanks for asking me! <br/> I will answer you soon as possible!</p>}
      </Label>
      <div style={{ transform: 'translate(0, -10px)', opacity: 0 }}>
        <Button>Send question</Button>
      </div>
      </InputWrapper>
      </Form>
    </QuestionsWrapper>

      <style jsx>{`
      .error {
        color: red;
        margin: 0 0 15px;
      }
      .thanks {
        margin: 0 0 15px;
      }      
      `}</style>
    </>
  )
}
