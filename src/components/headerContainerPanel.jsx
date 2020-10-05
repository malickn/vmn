import React from 'react'

const HeaderContainerPanel = (props) => {

    const hideSection = {
        display : (props.page === 'about') ? "none" : ''
    }
    const whoweare = (props.page === 'about') ? "#whoweare-about" : '#whoweare'

    return ( 
        <div className="header-content-panel">
                <div className="content">
                    <div className="contact">
                        <div className="get_in_touch">
                            <div className="contact_line"></div>
                            <div className="text bluecolored get_in_text">Get in touch</div>
                        </div>
                        <div className="phone">+1 450 672-0401</div>
                        <div className="email">contact@vmn.net</div>
                        <div className="address">
                            304 - 6200 Taschereau
                            <br/>Brossard, Quebec
                            <br/>J4W 3J8
                            <br/>Canada    
                        </div>
                        <div className="get_in_social">
                            <div className="contact_line"></div>
                            <div className="text bluecolored get_in_text">Get in Social</div>
                            <div className="social_icons">
                                <div>
                                    <a href="https://www.facebook.com/VisicomMedia/">
                                        <img alt="Facebook" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwwAADsMBx2+oZAAAABh0RVh0U29mdHdhcmUAcGFpbnQubmV0IDQuMS42/U4J6AAAAVBJREFUSEtjIAUU1vcKFdZ3WJTWd3oV13b7FtX2uJfUd0lApckDRfU9NiW1XWeKa7reA/Hvopquv8U1nb+K6jojoUpIB0BDNYpru54B8X8MXN0ZC1VGGggNXcVcUtfVCHYhkoFQ/p+Smq4YqFLSQG7uRPai2q7VcEOB3i+t6wqtr5/JVV9fzwbETFClpIG0+nouoIFH4QbXdl36//8/I1SafAB0Ecjgk3CDa7qPMQxKg4ERthKINwGT0zZwEoMaDAzvd0B6M0iuuK5zYXFztzxUC3EAaMAnuCtx4Zqu++X1E+SgWogDRBlc23Utt76eD6qFOFBU03m5qLbzHlDz/eLazh8Iwzp/gMQhct3rSU4hRdU9siBvltZ0qgMNOI8wuOssKFxBcsX13WJQ5aSDoZPcYGDUYDgYNRgOQDmrqLpZFliRqoBwWX2HDFQKD2BgAAB/d2TbAxI4xQAAAABJRU5ErkJggg==" />
                                    </a>
                                </div>
                                <div>
                                    <a href="https://twitter.com/visicommedia?lang=en">
                                        <img alt="Twitter" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwwAADsMBx2+oZAAAABh0RVh0U29mdHdhcmUAcGFpbnQubmV0IDQuMS42/U4J6AAAAkRJREFUSEvdVM9r1EAUnvqrgtpKf4gUvHrwHxBR8eKhiNBCb96EYlWMYiYhu2ySRynWnUnKkurBeulFEBY8FsSrRfTUiwcPglILRdSTQmtdXb+ZHWuyTep67Qcfye68981730we2/m4Mje316b4uBPI0+ApuxIfY6zZZZa7iGi/eWfMIupxKvK8+VmIW1Q7zAPxwPblBzw3uC/X7EC+4UF0w6P4DPfFXdcXF0w4Y04oryFw2Q3E2WZzc/ctQFyFB7IBNtPERj/B7+jgOafoRL1e360TeBjVdEAg3vNQcB5FB/RCCqSrlV/SgmlC+AeKW3LCmQlll05CKzex+MsEbYALfLJ2UrUOz3apGN1qm1iaqmoU6CF+jxZVKN9JBrH4OhusPIxe4DmLBA4bprLrWaLbb+VyMmgkW1An7FI8CvM/5SbpNuV6+/9p2r74WJq+128kW4AVV5X5usqcpA75yqKkx0i24FWrvVhYaQv8L6Lih/B3n5H8C4fkMO7lu7ykf9IX68i/ZKSyILp/EId0GZa8zE3eluIt0UyfkcrCSpJunPxj7P7n2nVGX361/fiikcmHS2IIN+SJvpN5IlvZQOzU5pe2HXTlgRxDJc9yhFIUDcQ8hbdHTWoxlCjmxTkkzcOSws9XDR9sXr1d5KuCnlhhVEbCAgRX0doark6+z2rQhHIZnLCspNtIFOM6bgQqGIHwLEQXQb2BEoLgZ3yuS3g+wkgcV+dg0jqHmkquKw6VStP9GH9HFDHUBzyv2psZ4DsQjP0GvJleNsSz6pMAAAAASUVORK5CYII=" />
                                    </a>
                                </div>
                                <div>
                                    <a href="https://www.linkedin.com/company/visicom-media">
                                        <img alt="Linkedin" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwwAADsMBx2+oZAAAABh0RVh0U29mdHdhcmUAcGFpbnQubmV0IDQuMS42/U4J6AAAAaRJREFUSEvtk8ErREEcxzeUcrS5IVKUJP4Af4OLPTi6cHAys2t3e2/e1Mrambdoc1LODrg4yMHRgXLQOqoNRQ7CSlGr8J3Zed7bUl4thy3f+vVe38+bb7/5vZlI4yrBVsaoLYqUyeu4I2disa1mg+qTCf3QZYtna8HtNag+qU69YGLLtziXwwbVJ7V91akOZXKjUCi0GlSf1EzV9lWnvxaqRBFK7KVRVZS7g5zzJuXHLdnn+YmMGIDfksquRantThBHzhInP0l4vl+HfCfK3E3CZFkV5nw2zXmb9h2xE/APMaZxPEuUiRdUBaN7JUzcUsed8pqpET7eVT/O1AXn69VgJva/fFvcU1s+Bb7zyxZ32OmQDgsK8Odgv95N1fjYjdRhQQGEDHb3kny1Z44vt+M9g04rHsPJOtZhQQGECS7j1IzoBRCx8l2Y/bnHCXNvDPIFECb4ilr+jUynFzsw85MAfzDIF8wQP0+WkjzXrRdAqVQ2Cv/I5+LRIF8A/8FVAfxZ8KYCupgoelcax2nb83F1T+d5rlMvgNRZhncQ4JcGNZwikU/tbu5ecCE0KQAAAABJRU5ErkJggg==" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="biglogo"></div>
                    <div className="menu">
                        <div className="item bluecolored">
                            <div className="selected"></div><div className="text">Home</div>
                        </div>
                        <div className="item">
                            <div></div><div className="text"><a href={whoweare} className="smooth-goto">Who Are We</a></div>
                        </div>
                        <div className="item" style={hideSection}>
                            <div></div><div className="text"><a href="#our_products" className="smooth-goto">What We Do</a></div>
                        </div>
                        <div className="item">
                            <div></div><div className="text"><a href="#our_clients" className="smooth-goto">Clients</a></div>
                        </div>
                        <div className="item">
                            <div></div><div className="text"><a href="#footer" className="smooth-goto">Contact</a></div>
                        </div>
                    </div>
                </div>
            </div>
     );
}
 
export default HeaderContainerPanel;