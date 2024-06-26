import { useTranslation } from 'react-i18next'

import { useAppContext, useDevicesContext } from '@contexts'
import { Button, ButtonGroup, Paper, Separator, Title } from '@atoms'
import { Avatar, Property, ToggleField } from '@molecules'

import { StyledContainer, StyledHeader } from './DeviceDetails.styles'

export const DeviceDetails = () => {
  const { modal } = useAppContext()
  const { toggleDevice } = useDevicesContext()
  const { t } = useTranslation()

  if (!modal.data) {
    return <p>Erro</p>
  }
  const { device, is_on } = modal.data

  return (
    <StyledContainer>
      <Paper>
        <StyledHeader>
          <Avatar size="large" imageUrl={`${device?.photoUrl}`} />
          <Title as="h3">{device?.name}</Title>
          <ToggleField
            label={t('device.toggle.label')}
            name="is_on"
            checked={is_on}
            onChange={() => toggleDevice(modal.data)}
          />
        </StyledHeader>

        <Separator />
        <Property title={t('device.property.virtual_id')} value={device?.info.virtual_id} />
        <Property title={t('device.property.ip_address')} value={device?.info.ip_address} />
        <Property title={t('device.property.mac_address')} value={device?.info.mac_address} />
        <Property title={t('device.property.signal')} value={device?.info.signal} />
        <ButtonGroup>
          <Button onClick={() => modal.close()}>{t('buttons.close')}</Button>
        </ButtonGroup>
      </Paper>
    </StyledContainer>
  )
}
