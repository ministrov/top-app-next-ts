import { FunctionComponent } from 'react';

const HighOrderComponent = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
    return function WithWrapperComponent(props: T) {
        return (
            <div className='hoc-wrapper'>
                <Component {...props} />
            </div>
        )
    }
}

export default HighOrderComponent;