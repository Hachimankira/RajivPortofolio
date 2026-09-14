import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

const RevealContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    opacity: ${({ $visible }) => ($visible ? 1 : 0)};
    transform: ${({ $visible }) => ($visible ? 'translateY(0)' : 'translateY(28px)')};
    transition: opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1), transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
    transition-delay: ${({ $delay }) => `${$delay}ms`};
    will-change: opacity, transform;
    ${({ $inline }) => ($inline ? 'width: fit-content;' : 'width: 100%;')}
`

const Reveal = ({ children, delay = 0, inline = false, ...rest }) => {
    const ref = useRef(null)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const el = ref.current
        if (!el) return

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisible(true)
                        observer.unobserve(entry.target)
                    }
                })
            },
            { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
        )
        observer.observe(el)
        return () => observer.disconnect()
    }, [])

    return (
        <RevealContainer ref={ref} $visible={visible} $delay={delay} $inline={inline} {...rest}>
            {children}
        </RevealContainer>
    )
}

export default Reveal