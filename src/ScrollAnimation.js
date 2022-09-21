import React, {useState, useRef, useEffect} from 'react'

function ScrollAnimation() {
    const [background, setBackGround] = useState("orange");
    const divRef = useRef();

    useEffect(() => {
        const handleScroll = () =>{
            const div = divRef.current;
            const { y } = div.getBoundingClientRect();
            const backgroundColor = y <= 0  ? 'blue' : 'orange';
            setBackGround(backgroundColor);
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }

    }, []);

  return (
    <div>
        <div ref={divRef} style={{ height: "180vh", background}}>
            <h1>
                Scroll para cambiar BackGround-color
            </h1>
        </div>
    </div>
  )
}

export { ScrollAnimation };