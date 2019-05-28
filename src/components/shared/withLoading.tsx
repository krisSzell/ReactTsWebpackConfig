import React, { ComponentType, Suspense } from "react";

import Loader from "@components/shared/loader/loader";

const withLoading = (WrappedComponent: ComponentType) => {
    return (props: any) => (
        <Suspense fallback={<Loader isLoading />}>
            <WrappedComponent {...props} />
        </Suspense>
    );
};

export default withLoading;
