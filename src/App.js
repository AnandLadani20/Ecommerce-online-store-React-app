import { lazy, Suspense } from 'react';
import { AuthWrapper } from './context/auth'
import { CartWrapper } from './context/cart';
import { FormWrapper } from './context/cartForm';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
import { WhishlistWrapper } from './context/wishlist';
import FilterWrapper from './context/filter';
const Routes = lazy(() => import("./Routes"));


function App() {
  return (
    <>

      <Suspense fallback={<></>}>
        <AuthWrapper>
          <CartWrapper>
            <FormWrapper>
              <WhishlistWrapper>
                <FilterWrapper>
                  <div className="loader-wrapper">
                    <div className="loader"></div>
                  </div>
                  <Routes />
                  <ToastContainer />
                </FilterWrapper>
              </WhishlistWrapper>
            </FormWrapper>
          </CartWrapper>
        </AuthWrapper>
      </Suspense>

    </>
  );
}

export default App;
