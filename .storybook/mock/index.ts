import { rest,setupWorker } from 'msw'

export const handlers = [
  // Capture a GET /user/:userId request,
  rest.get('/user/:userId', (req, res, ctx) => {
    // ...and respond with this mocked response.
    return res(ctx.json({username:'test', displayName:'John Doe'}))
  }),
]

export const worker = setupWorker(...handlers)