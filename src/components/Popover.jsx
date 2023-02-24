import {useState} from 'react';
import {
    useFloating,
    autoUpdate,
    offset,
    flip,
    shift,
    useClick,
    useDismiss,
    useRole,
    useInteractions,
  } from '@floating-ui/react';

function Popover({children}) {
    const [isOpen, setIsOpen] = useState(false);
 
    const {x, y, reference, floating, strategy, context} =
      useFloating({
        open: isOpen,
        onOpenChange: setIsOpen,
        middleware: [offset(10), flip(), shift()],
        whileElementsMounted: autoUpdate,
      });
   
    const click = useClick(context);
    const dismiss = useDismiss(context);
    const role = useRole(context);
   
    // Merge all the interactions into prop getters
    const {getReferenceProps, getFloatingProps} = useInteractions([
      click,
      dismiss,
      role,
    ]);

    return (
        <>
          <button ref={refs.setReference} {...getReferenceProps()}>
            Reference element
          </button>
          {isOpen && (
            <FloatingFocusManager context={context} modal={false}>
              <div
                ref={refs.setFloating}
                style={{
                  position: strategy,
                  top: y ?? 0,
                  left: x ?? 0,
                  width: 'max-content',
                }}
                {...getFloatingProps()}
              >
                {children}
              </div>
            </FloatingFocusManager>
          )}
        </>
    )
}

export default Popover