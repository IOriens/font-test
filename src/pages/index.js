import React from "react"

import './index.scss'


const text = `人之初性本善，性相近习相远, abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ, 0123456789`

const fontWeights = [100, 200, 300, 400, 500, 600, 700, 800, 900]



export default function Home() {
  return (
    <div>
      <h1>font-weight 测试</h1>
      <div className="test-list">
        {fontWeights.map(fontWeight => (
          <div className="test-item" key={fontWeight}>
            <h2> font-weight: {fontWeight}</h2>
            <p
              className="test-result"
              style={{
                fontWeight: fontWeight,
              }}
            >
              {text}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
