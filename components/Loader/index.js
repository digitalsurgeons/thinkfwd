import { ClimbingBoxLoader } from 'react-spinners'
import { colors } from '../../lib/settings'

export default ({ loading }) => {
  return (
    <div
      style={{
        width: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute'
      }}>
      <ClimbingBoxLoader
        sizeUnit={'px'}
        size={20}
        color={colors.purple}
        loading={loading}
      />
    </div>
  )
}
