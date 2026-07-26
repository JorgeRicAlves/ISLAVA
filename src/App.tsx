import { lazy, Suspense } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { LocaleLayout } from './layouts/LocaleLayout'
import { HomePage } from './pages/HomePage'

const TapesPage = lazy(() =>
  import('./pages/TapesPage').then((module) => ({ default: module.TapesPage })),
)
const KeratinPage = lazy(() =>
  import('./pages/KeratinPage').then((module) => ({ default: module.KeratinPage })),
)

function PageLoader() {
  return <div className="flex min-h-screen items-center justify-center bg-background" />
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/pt" replace />} />
        <Route path="/:locale" element={<LocaleLayout />}>
          <Route index element={<HomePage />} />
          <Route
            path="tapes"
            element={
              <Suspense fallback={<PageLoader />}>
                <TapesPage />
              </Suspense>
            }
          />
          <Route
            path="keratin"
            element={
              <Suspense fallback={<PageLoader />}>
                <KeratinPage />
              </Suspense>
            }
          />
        </Route>
        <Route path="*" element={<Navigate to="/pt" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
