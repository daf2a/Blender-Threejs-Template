import * as THREE from 'three'
import Experience from './Experience.js'
import Baked from './Baked.js'
import Screen from './Screen.js'

export default class World
{
    constructor(_options)
    {
        this.experience = new Experience()
        this.config = this.experience.config
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        
        this.resources.on('groupEnd', (_group) =>
        {
            if(_group.name === 'base')
            {
                this.setBaked()
                this.setScreens()
            }
        })
    }

    setBaked()
    {
        this.baked = new Baked()
    }
q
    setScreens()
    {
        this.backScreen = new Screen(
            this.resources.items.projector.scene.children[0],
            '/assets/video.mp4'
        )
    }

    resize()
    {
    }

    update()
    {
    }

    destroy()
    {
    }
}