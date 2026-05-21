import React, { useEffect, useRef, useState } from 'react'

export default function AudioPlayer(){
  const audioRef = useRef(null)
  const [muted,setMuted] = useState(true)

  useEffect(()=>{
    if(audioRef.current){
      audioRef.current.volume = 0.12
      audioRef.current.muted = muted
    }
  },[])

  return (
    <div>
      <audio ref={audioRef} loop src="https://cdn.pixabay.com/download/audio/2021/09/09/audio_9b8a4f7a3d.mp3?filename=futuristic-ambient-11168.mp3" autoPlay muted={muted} />
      <button onClick={()=>{ setMuted(v=>{ const nv=!v; if(audioRef.current){ audioRef.current.muted = nv } return nv }) }} className="fixed left-6 bottom-20 w-12 h-12 rounded-full glass flex items-center justify-center">
        {muted? '🔇':'🔊'}
      </button>
    </div>
  )
}
