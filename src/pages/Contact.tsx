import { useSpring, animated } from "@react-spring/web";
import { useRef, useState, type FC } from "react";
import TypeText from "../components/TypeText";
import TextFill from "../components/TextFill";
import emailjs from "@emailjs/browser"

const Contact: FC <{}> = ({}) => {
  const [showPlaceholder, setShowPlaceHoldder] = useState(true)
  const [showNamePlaceholder, setShowNamePlaceHoldder] = useState(true)
  const [showEmailPlaceholder, setShowEmailPlaceHoldder] = useState(true)
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [name, setName] = useState("")
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)

  const inputRef = useRef<HTMLInputElement>(null)

  const emailSpring = useSpring({
    config: {duration: 300},
    from: {height: "0dvh",},
    to: {height: "5dvh",},
    delay: 200
  })
  const nameSpring = useSpring({
    config: {duration: 300},
    from: {height: "0dvh",},
    to: {height: "5dvh",},
    delay: 500
  })
  const spring = useSpring({
    config: {duration: 1000},
    from: {height: "0dvh",},
    to: {height: "60dvh",},
    delay: 800
  })

  const handleSendMessage = () => {
    setLoading(true)
    emailjs
      .send(
        'service_7dwaogw', 
        'template_ovfemz9', 
        {
          title: "PORTFOLIO CONTACT",
          email: email,
          name: name,
          message: message,
          time: Date.now()
        }, 
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setLoading(false)
          setSent(true)
          setTimeout(() => {
            setSent(false)
            setEmail("")
            setName("")
            setMessage("")
            setShowEmailPlaceHoldder(true)
            setShowNamePlaceHoldder(true)
            setShowPlaceHoldder(true)
          }, 1000)
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  }

  return (
    <div
      style={{
        position: "absolute",
        display: "flex",
        flexDirection: "column",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100%",
        paddingTop: "15dvh",
        alignItems: "center",
        justifyContent: "flex-start"
      }}
    >
      <div
        style={{fontSize: "2dvh"}}
      >
        <TypeText text="SEND ME A MESSAGE" />
      </div>
      <div
        style={{
          width: "70vw",
          height: "5dvh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          borderRadius: 4,
          marginTop: "2dvh"
        }}
      >
        <animated.div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "70vw",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "black",
            borderRadius: 4,
            zIndex: 1,
            ...emailSpring
          }}
        />
        <div
          style={{
            width: "calc(70vw - 4px)",
            height: "calc(5dvh - 4px)",
            backgroundColor: "white",
            borderRadius: 4,
            position: "relative",
            zIndex: 2,
            border: "none",
            cursor: "text"
          }}
        >
          <textarea
            onFocus={() => {setShowEmailPlaceHoldder(false)}}
            onBlur={() => {setShowEmailPlaceHoldder(!email.length)}}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            style={{
              border: "none",
              width: "calc(68vw - 4px)",
              height: "calc(3dvh - 4px)",
              position: "relative",
              background: "none",
              zIndex: 2
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "1dvh",
              left: "1dvh",
              fontSize: "1.6dvh",
              zIndex: 1
            }}
          >
            {showEmailPlaceholder && <TypeText text="Write your email here..." />}
          </div>
        </div>
      </div>
      <div
        style={{
          width: "70vw",
          height: "5dvh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          borderRadius: 4,
          marginTop: "2dvh"
        }}
      >
        <animated.div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "70vw",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "black",
            borderRadius: 4,
            zIndex: 1,
            ...nameSpring
          }}
        />
        <div
          style={{
            width: "calc(70vw - 4px)",
            height: "calc(5dvh - 4px)",
            backgroundColor: "white",
            borderRadius: 4,
            position: "relative",
            zIndex: 2,
            border: "none",
            cursor: "text"
          }}
        >
          <textarea
            onFocus={() => {setShowNamePlaceHoldder(false)}}
            onBlur={() => {setShowNamePlaceHoldder(!name.length)}}
            onChange={(e) => setName(e.target.value)}
            value={name}
            style={{
              border: "none",
              width: "calc(68vw - 4px)",
              height: "calc(3dvh - 4px)",
              position: "relative",
              background: "none",
              zIndex: 2
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "1dvh",
              left: "1dvh",
              fontSize: "1.6dvh",
              zIndex: 1
            }}
          >
            {showNamePlaceholder && <TypeText text="Write your name here..." />}
          </div>
        </div>
      </div>
      <div
        style={{
          width: "70vw",
          height: "60dvh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          borderRadius: 4,
          marginTop: "2dvh"
        }}
      >
        <animated.div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "70vw",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "black",
            borderRadius: 4,
            zIndex: 1,
            ...spring
          }}
        />
        <div
          onClick={() => inputRef?.current?.focus()}
          style={{
            width: "calc(70vw - 4px)",
            height: "calc(60dvh - 4px)",
            backgroundColor: "white",
            borderRadius: 4,
            position: "relative",
            zIndex: 2,
            border: "none",
            cursor: "text"
          }}
        >
          <textarea
            onFocus={() => {setShowPlaceHoldder(false)}}
            onBlur={() => {setShowPlaceHoldder(!message.length)}}
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            style={{
              border: "none",
              width: "calc(68vw - 4px)",
              height: "calc(58dvh - 4px)",
              position: "relative",
              background: "none",
              zIndex: 2
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "1dvh",
              left: "1dvh",
              fontSize: "1.6dvh",
              zIndex: 1
            }}
          >
            {showPlaceholder && <TypeText text="Write your message here..." />}
          </div>
        </div>
      </div>
      {
      email.length > 0 && message.length > 0 && name.length > 0 
        && <div
          onClick={() => handleSendMessage()}
          style={{
            marginTop: "1.5dvh",
            fontSize: "2dvh"
          }}
        >
          {!sent && !loading && <TextFill text="SEND" />}
        </div>
      }
      <div
        style={{
          marginTop: "1.5dvh",
          fontSize: "2dvh"
        }}
      >
        {loading && <TypeText text="LOADING..." />}
        {sent && <TypeText text="SENT" />}
      </div>
    </div>
  );
};

export default Contact;