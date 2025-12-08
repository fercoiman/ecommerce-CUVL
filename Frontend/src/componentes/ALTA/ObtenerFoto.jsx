import './ObtenerFoto.css'

export function ObtenerFoto() {
    return (
        <div className="ObtenerFoto">
            <input type="file" id="archivo" />
            <div id="drop">
                <label htmlFor="archivo">Drag And Drop & Click</label>
            </div>
        </div>
    )
}