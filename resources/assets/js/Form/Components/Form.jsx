import {nextStep, prevStep, goTo} from './../Intents/nextStep.js';
import {submit}                   from './../Intents/submit.js';

export default class Form extends React.Component {
    goToNext(event) {
        event.preventDefault();
        nextStep();
    }
    
    goToPrev(event) {
        event.preventDefault();
        prevStep();
    }
    
    trySubmit = (event) => {
        event.preventDefault();
        submit(this.props.formData);
    }
    
    checkForEnter(event) {
        event.preventDefault();
        nextStep();
    }
    
    goDirectlyTo(step) {
        return (event) => {
            event.preventDefault;
            goTo(step);
        };
    }
    
    render() {
        let hasNext             = this.props.currentStep < this.props.steps.length - 1;
        let hasPrev             = this.props.currentStep > 0;
        let canSubmit           = this.props.currentStep === this.props.steps.length - 1 || this.props.canSubmit;
        let activeStep          = this.props.steps[this.props.currentStep];
        let ActiveStepComponent = activeStep.component;
        
        if (!this.props.formComplete) {
            return (
                <div className="form-with-progress">
                    <ol className="progress">
                        {this.props.steps.map((step, i) => {
                            let className = [];
                            
                            if (this.props.currentStep === i)
                                className.push('active');
                            if (step.error) 
                                className.push('error');
                                
                            return (
                                <li onClick={this.goDirectlyTo(i)} className={className.join(' ')}></li>
                            );
                        })}
                    </ol>
                    <form action="#" onSubmit={this.checkForEnter}>
                        <ActiveStepComponent formValue={this.props.formData[activeStep.name]} error={activeStep.error} animation={this.props.animation} />
                        <div className="buttons">
                            <a disabled={!hasPrev} className="button small" onClick={this.goToPrev}>Previous</a>
                            <a disabled={!hasNext} className="button small" onClick={this.goToNext}>Next</a>
                            <a disabled={!canSubmit} className="button small submit" onClick={this.trySubmit}>Submit</a>
                        </div>
                    </form>
                </div>
            );
        }
        else {
            return (
                <section>
                    <h2><small>
                        <svg className="icon" x="0px" y="0px" viewBox="0 0 20 20" style={{'enable-background': 'new 0 0 20 20'}}>
                        <path d="M5.8,12.2V6H2C0.9,6,0,6.9,0,8v6c0,1.1,0.9,2,2,2h1v3l3-3h5c1.1,0,2-0.9,2-2v-1.82c-0.064,0.014-0.132,0.021-0.2,0.021h-7
                        	V12.2z M18,1H9C7.9,1,7,1.9,7,3v8h7l3,3v-3h1c1.1,0,2-0.899,2-2V3C20,1.9,19.1,1,18,1z" />
                        </svg>
                    </small>Thank you for your correspondence</h2>
                    <p style={{'text-align': 'center'}}>Someone from Tyler Web Dev will contact you regarding your inquiry.</p>
                </section>
            )
        }
    }
}
