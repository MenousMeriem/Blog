import React from 'react'

function Mail() {
  return (
    <div>
        <div className="hero h-full bg-white">
            <div className="hero-content flex-col lg:flex-row-reverse my-20">
                <div className="text-center ml-10 lg:text-left ">
                    <h1 className="text-5xl font-bold">Vos retours</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Message</span>
                            </label>
                            <textarea placeholder="Votre message" className="textarea textarea-bordered textarea-lg w-full max-w-xs" ></textarea>                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary text-white">Envoyer</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Mail