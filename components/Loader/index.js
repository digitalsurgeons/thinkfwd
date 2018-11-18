import { ClimbingBoxLoader } from 'react-spinners'
import { colors } from '../../lib/settings'

export default ({ loading }) => {
  return (
    <div
      style={{
        height: 'calc(100vh - 260px)',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute'
      }}>
      {/* <ClimbingBoxLoader
        sizeUnit={'px'}
        size={20}
        color={colors.pink}
        loading={loading}
      /> */}
    </div>
  )
}
