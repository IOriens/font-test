import React, { useState } from "react"

import "./index.scss"

const text = `人之初性本善，性相近习相远, abcdefghi3jklm2nop你好啊qrs4tuvwxy1zABCDEFGH1IJKLMNOP7QRSTUVWXYZ, 0123456789`

const fontWeights = [100, 200, 300, 400, 500, 600, 700, 800, 900]

const customStyles = [
  {},
  { fontFamily: "system-ui" },
  { fontFamily: "-apple-system" },
  { fontFamily: "PingFangSC-Regular" },
  { fontFamily: "PingFangSC-Medium" },
  {
    fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
  },
]

export default function Home() {
  const [customStyle, setCustomStyle] = useState({})

  return (
    <div>
      <h1>自定义样式</h1>
      <div>当前覆盖样式:{JSON.stringify(customStyle)}</div>
      <div className="controls">
        {customStyles.map(customStyle => (
          <button
            key={JSON.stringify(customStyle)}
            onClick={() => setCustomStyle(customStyle)}
          >
            {JSON.stringify(customStyle)}
          </button>
        ))}
      </div>

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
              <span style={customStyle}>{text}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
