import React, { ChangeEvent, ChangeEventHandler, useState } from 'react';

type OnOffProps = {
  isOn: boolean
  onOffChange: (data: boolean) => void
}

export default function OnOff(props: OnOffProps) {
  function onChange(event: ChangeEvent) {
    const target = event.target as HTMLInputElement
    props.onOffChange(target.checked)
  }
  return <input type="checkbox"
    checked={props.isOn}
    onChange={onChange}
  />
}