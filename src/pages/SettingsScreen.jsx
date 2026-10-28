import { useState } from 'react'
import AppShell from '../components/AppShell.jsx'
import { InputField } from '../components/InputField.jsx'
import ToggleSwitch from '../components/ToggleSwitch.jsx'
import BigButton from '../components/BigButton.jsx'

export default function SettingsScreen() {
  const [workspaceName, setWorkspaceName] = useState('Acme Ops')
  const [notifyEmail, setNotifyEmail] = useState(true)
  const [betaFeatures, setBetaFeatures] = useState(false)
  const [region, setRegion] = useState('us-east')

  return (
    <AppShell>
      <div className="mx-auto max-w-[560px]">
        <h1 className="m-0 text-center font-black text-5xl lowercase tracking-tight">workspace settings</h1>
        <p className="mb-6 mt-3 text-center text-base text-mute">Changes apply to this environment only.</p>

        <div className="bg-white p-6 shadow-hard">
          <InputField
            labelText="Workspace name"
            id="ws-name"
            value={workspaceName}
            onChange={(e) => setWorkspaceName(e.target.value)}
            placeholder="e.g. Acme"
          />

          <div className="mb-4 flex items-center gap-4">
            <div className="min-w-0 flex-1">
              <div className="text-sm font-bold text-ink">Email notifications</div>
              <div className="mt-1 text-xs font-medium text-mute">Digest to admins</div>
            </div>
            <ToggleSwitch isOn={notifyEmail} whenToggle={setNotifyEmail} />
          </div>

          <div className="mb-5 flex items-center gap-4">
            <div className="min-w-0 flex-1">
              <div className="text-sm font-bold text-ink">Beta features</div>
              <div className="mt-1 text-xs font-medium text-mute">May be unstable</div>
            </div>
            <ToggleSwitch isOn={betaFeatures} whenToggle={setBetaFeatures} />
          </div>

          <label htmlFor="region" className="mb-2 block text-sm font-bold text-ink">
            Data region
          </label>
          <select
            id="region"
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            className="mb-5 w-full border-2 border-ink bg-brat px-3.5 py-3 text-base text-ink"
          >
            <option value="us-east">US East</option>
            <option value="eu-west">EU West</option>
            <option value="apac">APAC</option>
          </select>

          <BigButton variant="primary">Save changes</BigButton>
        </div>
      </div>
    </AppShell>
  )
}
