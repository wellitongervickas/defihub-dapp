import { type HTMLProps, Children, cloneElement, ReactElement } from 'react'
import { ToggleContent } from './ToggleContent'
import classNames from 'classnames'
import { XMarkIcon } from '@heroicons/react/24/outline'

export type OverlayToggleProps = HTMLProps<HTMLDivElement> & {
  selector: ReactElement
  container: ReactElement
}

export const OverlayToggle = ({
  selector,
  container,
  ...props
}: OverlayToggleProps) => {
  return (
    <ToggleContent
      {...props}
      className={classNames(props.className, 'lg:relative')}
      useClickOutside={true}
      squareRootClassName={classNames(
        'lg:rounded-2xl absolute z-[19]',
        'bottom-0 left-0 right-0 top-0',
        'lg:-right-1 lg:-top-1 lg:bottom-auto lg:left-auto',
        'bg-white/70 dark:bg-black/70 backdrop-blur-sm',
        'before:from-lime-400 before:to-sky-400 before:gradient-mask',
        'before:bg-gradient-to-b lg:before:rounded-2xl lg:before:p-0.5'
      )}
      squareRootOpenClassName='visible opacity-100 lg:w-60 lg:h-auto h-screen w-screen'
      squareRootCloseClassName='invisible opacity-0 w-0 h-0'
      element={({ onClick, isOpen }) =>
        cloneElement(Children.only(selector), {
          className: classNames('relative', {
            'lg:z-[20]': isOpen
          }),
          onClick: onClick,
          isOpen: isOpen
        })
      }
    >
      {({ onClick }) => (
        <div className='h-full overflow-y-auto'>
          <div className='pl-5 pt-5 lg:hidden' onClick={onClick}>
            <XMarkIcon width={32} />
          </div>
          {container}
        </div>
      )}
    </ToggleContent>
  )
}
export default OverlayToggle
