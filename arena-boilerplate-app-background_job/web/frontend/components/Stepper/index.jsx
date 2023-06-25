import React from 'react'
import PropTypes from 'prop-types'
import { Icon, Stack } from '@shopify/polaris'
import { CircleTickMinor } from '@shopify/polaris-icons'

import './styles.scss'

Stepper.propTypes = {
  steps: PropTypes.array, // [{ label: String, completed: Boolean }]
}

Stepper.defaultProps = {
  steps: undefined,
}

function Stepper(props) {
  const { steps } = props

  if (!steps) return null

  let items = []
  items.push('empty')
  steps.forEach((step, index) => {
    items.push(step)
    if (index !== steps.length - 1) items.push('divider')
  })
  items.push('empty')

  return (
    <div className="Stepper">
      <Stack distribution="center" alignment="center" wrap={true}>
        {items.map((step, index) => {
          switch (step) {
            case 'empty':
              return <Stack.Item fill key={index}></Stack.Item>

            case 'divider':
              return (
                <Stack.Item fill key={index}>
                  <div
                    style={{
                      height: 2,
                      background: steps[Math.floor(index / 2)]?.completed
                        ? 'var(--successColor)'
                        : 'var(--noteColor)',
                    }}
                  />
                </Stack.Item>
              )

            default:
              return (
                <Stack.Item key={index}>
                  <div
                    className={step.completed ? 'color__success' : 'color__note'}
                    style={{ maxWidth: 300 }}
                  >
                    <Stack alignment="center" spacing="tight" wrap={false}>
                      {step.completed ? (
                        <Icon source={CircleTickMinor} />
                      ) : (
                        <div className="StepIcon">
                          <div
                            style={{
                              borderColor: step.completed ? 'color__success' : 'color__note',
                            }}
                          >
                            {Math.floor(index / 2) + 1}
                          </div>
                        </div>
                      )}
                      <div>
                        <div style={{ textTransform: 'uppercase', fontSize: '0.8em' }}>
                          Step {Math.floor(index / 2) + 1}
                        </div>
                        <div style={{ fontWeight: 500, maxWidth: 200 }}>{step.label}</div>
                      </div>
                    </Stack>
                  </div>
                </Stack.Item>
              )
          }
        })}
      </Stack>
    </div>
  )
}

export default Stepper
