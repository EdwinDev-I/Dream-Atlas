import "./styles/Success.css";

function SuccessMessage() {
  return(
        <div className="success-card">
          <svg 
           className="checkmark"
           viewBox="0 0 52 52"
          >
            <circle 
             className="checkmark-circle" 
             cx="26" 
             cy="26" 
             r="25" 
             fill="none"
            />
            <path 
             className="checkmark-check" 
             fill="none"
             d="M14 27 L22 35 L38 19" 
            />
          </svg>
        <p className="success-p">Message Sent!</p>
      </div>
  )
}

export default SuccessMessage;