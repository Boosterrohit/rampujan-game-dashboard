import {  Suspense } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import { appUrls } from "../url"
import { Dashboard } from "@/view/page/dashboard"
import { AdminManagement } from "@/view/page/admin-management"
import { PlayerManagement } from "@/view/page/player-management"
import { RouletteGifts } from "@/view/page/roulette/roulette-gift"
import { RouletteCampaigns } from "@/view/page/roulette/roulette-campaigns"
import { RedeemRequests } from "@/view/page/redeem/redeem-request"
import { RedeemHistory } from "@/view/page/redeem/redeem-history"
import { LoadWallet } from "@/view/page/wallet/load-wallet"
import { TransactionRecords } from "@/view/page/wallet/transactionRecord"

// import MapContainer from "../view/dashboard/map/MapContainer"

// const Test = lazy(() => import("../component/Test"))

const PrivateRoute = () => {
//   const isAuthenticated = document.cookie.includes("access_token")

//   if (!isAuthenticated) {
//     return <Navigate to="/login" replace />
//   }
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {/* Home page */}
        <Route path={appUrls.dashboard} element={<Dashboard />} />
        <Route path={appUrls.adminManagement} element={<AdminManagement />} />
        <Route path={appUrls.playerManagement} element={<PlayerManagement />} />
        <Route path={appUrls.rouletteGift} element={<RouletteGifts/>} />
        <Route path={appUrls.rouletteChampaigns} element={<RouletteCampaigns />} />
        <Route path={appUrls.redeemRequest} element={<RedeemRequests/>} />
        <Route path={appUrls.redeemHistory} element={<RedeemHistory />} />
        <Route path={appUrls.loadWallet} element={<LoadWallet/>} />
        <Route path={appUrls.transactionRecord} element={<TransactionRecords/>} />
        <Route path="*" element={<Navigate to={appUrls.dashboard} replace />} />
      </Routes>
    </Suspense>
  )
}

export default PrivateRoute